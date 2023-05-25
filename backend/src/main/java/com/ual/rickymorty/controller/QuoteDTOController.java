package com.ual.rickymorty.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ual.rickymorty.dto.QuoteDTO;
import com.ual.rickymorty.service.QuoteDTOService;

@RestController
@RequestMapping("/quotes")
public class QuoteDTOController {
    @Autowired
    private QuoteDTOService quoteService;

    @GetMapping("data")
    public ResponseEntity<QuoteDTO> getQuoteData() {
        return new ResponseEntity<QuoteDTO>(quoteService.retrieveQuote(),
                HttpStatus.OK);
    }
}