package jp.kintai.handler;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/login")
public class LoginHandler {

    @Path("/google/state")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public LoginStateResponse hello() {
        return new LoginStateResponse("dummy");
    }

    public static class LoginStateResponse {
        public String state;

        public LoginStateResponse(String state) {
            this.state = state;
        }
    }
}
