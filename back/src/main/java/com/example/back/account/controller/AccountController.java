package com.example.back.account.controller;


import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.OK)
    public void signUp(@RequestBody AccountSignUpDto accountSignUpDto) throws Exception {
        accountService.signUp(accountSignUpDto);
    }

}
