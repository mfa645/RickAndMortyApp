package com.ual.rickymorty.service;
import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import com.ual.rickymorty.dto.QuoteDTO;

import org.springframework.stereotype.Component;
@Component("QuoteService")
public class QuoteDTOService {
    private Playwright playwrightInstance;

    public QuoteDTOService() {
        super();
        this.playwrightInstance = Playwright.create();
    }

    public QuoteDTO retrieveQuote() {
        Browser browserInstance = this.playwrightInstance.chromium().launch();

        var quotes = retrieveQuoteString(browserInstance);

        return new QuoteDTO(quotes);
    }

    private String[] retrieveQuoteString(Browser browser) {
        String quotesResult[];

        Page page = browser.newPage();
        page.navigate("https://www.scarymommy.com/rick-morty-quotes");
        page.waitForSelector(
                ".AOL > ol");

        Document webPage = Jsoup.parse(page.content());

        List<String> quotes = webPage.select("ol > li").eachText();

        if (quotes == null) {
            return null;
        }

        quotesResult=(String[]) quotes.toArray();

        page.close();

        return quotesResult;
    }
}
