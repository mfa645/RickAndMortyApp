package com.ual.rickymorty.dto;

public class QuoteDTO {
    private String[] quotes;


    public QuoteDTO(String[] quotes){
        this.quotes = quotes;
    }

    public String[] getQuotes() {
        return quotes;
    }

    public void setQuotes(String[] quotes) {
        this.quotes = quotes;
    }
}
