package com.example.back.account.service;

import com.example.back.account.dto.AccountAllInfoDto;
import com.example.back.account.dto.AccountInfoDto;
import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.dto.AccountUpdateDto;

import java.util.List;

public interface AccountService {

    void signUp(AccountSignUpDto accountSignUpDto) throws Exception;

    //업데이트 방식 논의
    void update(AccountUpdateDto accountUpdateDto) throws Exception;

    void updatePassword(String checkPassword, String toBePassword) throws Exception;

    void withdraw(String checkPassword) throws Exception;

    AccountInfoDto getInfo(Long id) throws Exception;

    List<AccountAllInfoDto> getAllInfo() throws Exception;

}
