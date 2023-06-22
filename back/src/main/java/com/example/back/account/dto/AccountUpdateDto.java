package com.example.back.account.dto;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import javax.validation.constraints.Pattern;

@Data
@Setter(AccessLevel.NONE)
public class AccountUpdateDto {

    @Pattern(regexp = "^[A-Za-z0-9]{8,15}$",
            message = "닉네임은 영어와 숫자로만 이루어진 8자 이상 15자 이하의 값을 입력해주세요.")
    private String nickname;


    String checkPassword;


    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
            message = "비밀번호는 8~20 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String toBePassword;
}
