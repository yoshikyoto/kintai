package kintai.api.handler;


import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/")
public class RootHandler {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("")
    public String hello() {
        return "Hello World";
    }
}
