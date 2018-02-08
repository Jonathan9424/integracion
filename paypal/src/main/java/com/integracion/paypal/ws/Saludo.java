package com.integracion.paypal.ws;

import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

@Path("/saludo")
@Produces("application/json; charset=utf-8")
public class Saludo {

	@GET
	@Path("/obtener/{nombre}")
	public Response obtenerSaludo(@PathParam("nombre") String n) {
		Date d = new Date();
		String res = "hola -- " + n + " / " + d;
		return Response.status(200).entity(res).build();
	}

	@GET
	public String hola(@QueryParam("nombre") String nombre) {
		return "Hola " + nombre;
	}
}
