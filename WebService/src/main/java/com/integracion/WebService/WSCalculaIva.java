package com.integracion.WebService;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import com.integracion.interfaces.ICalculaIva;

@WebService(serviceName = "calcula")
public class WSCalculaIva {

	@EJB
	private ICalculaIva ic;

	@WebMethod(operationName = "iva")
	public int operacion(@WebParam int valor, @WebParam int porcentaje) {
		// CalcularIvaBean cb = new CalcularIvaBean();
		int respuesta = ic.iva(valor, porcentaje);
		return respuesta;
	}

}
