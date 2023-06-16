package com.example.back.account.service;

import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.dto.AccountUpdateDto;

public interface AccountService {

    void signUp(AccountSignUpDto accountSignUpDto) throws Exception;

    void update(AccountUpdateDto accountUpdateDto) throws Exception;

    void updatePassword(String checkPassword, String toBePassword) throws Exception;

//    AccountInfoDto getInfo(Long id) throws Exception;
//
//    AccountInfoDto getMyInfo() throws Exception;
//    질문 답변 완성후 예정

}
