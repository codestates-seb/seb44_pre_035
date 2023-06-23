package com.example.back.account.entity;


import com.example.back.answer.entity.Answer;
import com.example.back.question.audit.BaseEntity;
import com.example.back.question.entity.Question;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Account extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long id;

    @Column(nullable = false, length = 20, unique = true)
    private String email;

    private String password;

    @Column(nullable = false, length = 15)
    private String nickname;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    @Column(length = 1000)
    private String refreshToken;

    private Long reputation;

    private String profileImgName;

    private String profileImgPath;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questionList = new ArrayList<>();

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Answer> answerList = new ArrayList<>();


    // oauth 2.0 깃헙 사전설정
//    @Enumerated(EnumType.STRING)
//    private SocialType socialType;
//
//    private String socialId;


    //정보 수정
    public void updatePassword(PasswordEncoder passwordEncoder, String password) {
        this.password = passwordEncoder.encode(password);
    }

    public void updateNickName(String nickname) {
        this.nickname = nickname;
    }

    //패스워드 암호화
    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }

    //user 권한 부여
    public void addUserAuthority() {
        this.role = Role.USER;
    }

    //token 관련
    public void updateRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void destroyRefreshToken() {
        this.refreshToken = null;
    }

    //패스워드 검증 메서드
    public boolean matchPassword(PasswordEncoder passwordEncoder, String checkPassword) {
        return passwordEncoder.matches(checkPassword, getPassword());
    }

    public enum Role {
        USER
    }

//    public enum SocialType {
//        GOOGLE, GITHUB
//    }

    public void addQuestion(Question question) {
        questionList.add(question);
        question.setAccount(this);
    }

    public void removeQuestion(Question question) {
        questionList.remove(question);
        question.setAccount(null);
    }

    //프로필 이미 경로
    public String profileImagePath() {
        return this.getProfileImgPath() + "/" + this.getProfileImgName();
    }
}
