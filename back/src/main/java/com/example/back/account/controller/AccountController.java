package com.example.back.account.controller;


import com.example.back.account.dto.AccountSignUpDto;
import com.example.back.account.dto.UpdatePasswordDto;
import com.example.back.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.OK)
    public void signUp(@Valid @RequestBody AccountSignUpDto accountSignUpDto) throws Exception {
        accountService.signUp(accountSignUpDto);
    }

    @PutMapping ("/password")
    @ResponseStatus(HttpStatus.OK)
    public void updatePassword(@Valid @RequestBody UpdatePasswordDto updatePasswordDto) throws Exception {
        accountService.updatePassword(updatePasswordDto.getCheckPassword(), updatePasswordDto.getToBePassword());
    }

}
