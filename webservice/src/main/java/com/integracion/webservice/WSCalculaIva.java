package com.integracion.webservice;

import javax.ejb.EJB;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebService;

import com.integracion.interfaces.ICalculaIva;
import com.integracion.model.CalcularIvaBean;

@WebService(serviceName = "calcula")
public class WSCalculaIva {

	@EJB
	private ICalculaIva ic;

	@WebMethod(operationName = "iva")
	public int operacion(@WebParam int valor, @WebParam int porcentaje) {
		CalcularIvaBean cib = new CalcularIvaBean();
		int respuesta = cib.iva(valor, porcentaje);
		return respuesta;
	}

}
