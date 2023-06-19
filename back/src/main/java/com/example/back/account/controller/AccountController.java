package com.example.back.account.controller;


import com.example.back.account.dto.*;
import com.example.back.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @DeleteMapping("/delete")
    @ResponseStatus(HttpStatus.OK)
    public void withdraw(@Valid @RequestBody AccountWithdrawDto accountWithdrawDto) throws Exception {
        accountService.withdraw(accountWithdrawDto.getCheckPassword());
    }

    @GetMapping("/{account-id}")
    public ResponseEntity<AccountInfoDto> getInfoAccount(@PathVariable(name = "account-id") Long id) throws Exception {
        AccountInfoDto accountInfoDto = accountService.getInfo(id);

        return ResponseEntity.ok(accountInfoDto);
    }

    @GetMapping
    public ResponseEntity<List<AccountAllInfoDto>> getAllInfoAccount() throws Exception {
        List<AccountAllInfoDto> allInfo = accountService.getAllInfo();
        return ResponseEntity.ok(allInfo);
    }
}
