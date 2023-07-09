package com.softwaredevelopment.socialnetworkapp;



import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;



import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class InitializationTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void helloWorldRestControllerTest() throws Exception {
        this.mockMvc.perform(get("/")).andDo(print())
                .andExpect(status().isOk()).andExpect(content().string(containsString("Hello World")));
    }



}
