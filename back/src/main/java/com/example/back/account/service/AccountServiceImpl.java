package com.example.back.account.service;

import com.example.back.account.dto.AccountAllInfoDto;
import com.example.back.account.dto.AccountInfoDto;
import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.dto.AccountUpdateDto;
import com.example.back.account.entity.Account;
import com.example.back.account.repository.AccountRepository;
import com.example.back.account.util.SecurityUtil;
import com.example.back.answer.dto.AnswerResponseDto;
import com.example.back.answer.entity.Answer;
import com.example.back.answer.mapper.AnswerMapper;
import com.example.back.answer.repository.AnswerRepository;
import com.example.back.question.dto.QuestionResponseDto;
import com.example.back.question.entity.Question;
import com.example.back.question.mapper.QuestionMapper;
import com.example.back.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Transactional
public class AccountServiceImpl implements AccountService{


    private final AccountRepository accountRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final PasswordEncoder passwordEncoder;
    private final QuestionMapper questionMapper;
    private final AnswerMapper answerMapper;

    @Override //회원가입
    public void signUp(AccountSignUpDto accountSignUpDto) throws Exception {

        Account account = accountSignUpDto.toEntity();
        account.addUserAuthority();
        account.encodePassword(passwordEncoder);

        if(accountRepository.findByEmail(accountSignUpDto.getEmail()).isPresent()) {
            throw new Exception("이미 가입된 이메일입니다.");
        }

        //여기부터
        String[] defaultProfileImages = {
                "a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"
        };
        Random random = new Random();
        int selectedIndex = random.nextInt(defaultProfileImages.length);
        String selectedImage = defaultProfileImages[selectedIndex];

        account.setProfileImgName(selectedImage);
        account.setProfileImgPath("C:\\Users\\hyun\\IdeaProjects\\profile\\default");
        //여기까지 주석처리 하고 테스트

        accountRepository.save(account);

    }

    @Override  //정보 업데이트
    public void update(AccountUpdateDto accountUpdateDto) throws Exception {
        Account account = accountRepository.findByEmail(SecurityUtil.getLoginUsername())
                .orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));

        if(accountUpdateDto.getNickname() != null) {
            account.setNickname(accountUpdateDto.getNickname());
        }

        if(accountUpdateDto.getCheckPassword() != null && accountUpdateDto.getToBePassword() != null) {
            if(!account.matchPassword(passwordEncoder, accountUpdateDto.getCheckPassword())) {
                throw new Exception("비밀번호가 일치하지 않습니다.");
            }
            account.updatePassword(passwordEncoder, accountUpdateDto.getToBePassword());
        }
        accountRepository.save(account);
    }

    @Override // 회원 탈퇴
    public void withdraw(String checkPassword) throws Exception {
        Account account = accountRepository.findByEmail(SecurityUtil.getLoginUsername()).orElseThrow(() -> new Exception("회원이 존재하지 않습니다."));

        if(!account.matchPassword(passwordEncoder, checkPassword)) {
            throw new Exception("비밀번호가 일치하지 않습니다.");
        }

        accountRepository.delete(account);
    }

    @Override //유저 상세페이지 유저 일치시 isEditable = True
    public AccountInfoDto getInfo(Long id) throws Exception {
        Account account = accountRepository.findById(id).orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        String loginUser = SecurityUtil.getLoginUsername();
        boolean isEditable = loginUser != null && loginUser.equals(account.getEmail());

        List<Question> questionList = questionRepository.findAllByAccount(account);
        List<Answer> answerList = answerRepository.findAllByAccount(account);

        account.setReputation(questionList.size()*3L + answerList.size()+1L);
        Long questionSize = (long) questionList.size();
        Long answerSize = (long) answerList.size();

        List<QuestionResponseDto> questionResponseDtos = questionMapper.questionsToQuestionsResponseDtos(questionList);
        List<AnswerResponseDto> answerResponseDtos = answerMapper.answersToAnswerResponseDtos(answerList);

        return new AccountInfoDto(account.getId(), account.getNickname(), account.getEmail(),
                questionResponseDtos, answerResponseDtos, isEditable, account.getCreatedAt(),
                account.getReputation(),questionSize,answerSize, account.profileImagePath());
    }

    @Override //모든 유저 정보 리스트 반환 일단 임시로 대충 작성해놓음 나중에 생성자 변경 예정
    public List<AccountAllInfoDto> getAllInfo() throws Exception {
        List<Account> accounts = accountRepository.findAll();

        List<AccountAllInfoDto> accountAllInfoDtos = accounts.stream()
                .map(account -> new AccountAllInfoDto(account.getId(),account.getNickname(),account.getEmail(),account.profileImagePath()))
                .collect(Collectors.toList());

        return accountAllInfoDtos;
    }

    @Override //프로필사진 업로드 db저장
    public void uploadProfileImage(Long id, MultipartFile file) throws Exception {

        Account account = accountRepository.findById(id).orElseThrow(() -> new Exception("해당 유저를 찾을수 없습니다."));
        String filePath = "C:\\Users\\aello\\profile\\";

        String fileName = id + "_profile.jpg";

        file.transferTo(new File(filePath + fileName));

        account.setProfileImgName(fileName);
        account.setProfileImgPath(filePath);
        accountRepository.save(account);

    }

}
