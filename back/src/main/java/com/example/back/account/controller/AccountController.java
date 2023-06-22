package com.example.back.account.controller;


import com.example.back.account.dto.*;
import com.example.back.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PatchMapping ("/{account-id}/update")
    @ResponseStatus(HttpStatus.OK)
    public void updateInfo(@PathVariable("account-id") Long id, @Valid @RequestBody AccountUpdateDto accountUpdateDto) throws Exception {
        accountService.update(accountUpdateDto);
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

    @PatchMapping("/{account-id}/upload")
    @ResponseStatus(HttpStatus.OK)
    public void uploadImg(@PathVariable("account-id") Long id, @RequestParam("file") MultipartFile file) throws Exception {
        accountService.uploadProfileImage(id, file);
    }
}
