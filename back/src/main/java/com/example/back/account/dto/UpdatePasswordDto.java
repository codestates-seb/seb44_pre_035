package com.example.back.account.dto;


import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Data
@Setter(AccessLevel.NONE)
public class UpdatePasswordDto {

    @NotBlank(message = "비밀번호를 입력해주세요.")
    String checkPassword;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
            message = "비밀번호는 8~20 자리이면서 1개 이상의 알파벳, 숫자, 특수문자를 포함해야합니다.")
    private String toBePassword;

}
