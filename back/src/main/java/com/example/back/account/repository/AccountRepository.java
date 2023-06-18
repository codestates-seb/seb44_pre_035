package com.example.back.account.repository;

import com.example.back.account.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account,Long> {

    Optional<Account> findById(Long id);

    Optional<Account> findByEmail(String email);

//    boolean existsByEmail(String email);

    Optional<Account> findByRefreshToken(String refreshToken);

    List<Account> findAll();
}
