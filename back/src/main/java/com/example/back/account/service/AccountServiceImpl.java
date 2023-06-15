package com.example.back.account.service;

import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.dto.AccountUpdateDto;
import com.example.back.account.entity.Account;
import com.example.back.account.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class AccountServiceImpl implements AccountService{


    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    @Override //회원가입
    public void signUp(AccountSignUpDto accountSignUpDto) throws Exception {

        Account account = accountSignUpDto.toEntity();
        account.addUserAuthority();
        account.encodePassword(passwordEncoder);

        if(accountRepository.findByEmail(accountSignUpDto.getEmail()).isPresent()) {
            throw new Exception("이미 가입된 이메일입니다.");
        }

        accountRepository.save(account);

    }

    @Override  //정보 업데이트
    public void update(AccountUpdateDto accountUpdateDto) throws Exception {

    }

    @Override //패스워드 변경전 변경후
    public void updatePassword(String checkPassword, String toBePassword) throws Exception {

    }
}
