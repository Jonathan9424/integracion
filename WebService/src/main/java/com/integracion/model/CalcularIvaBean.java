package com.integracion.model;

import javax.ejb.Stateless;

import com.integracion.interfaces.ICalculaIva;

@Stateless	
public class CalcularIvaBean implements ICalculaIva {

	@Override
	public int iva(int valor, int porcentaje) {
		return valor + ((valor * porcentaje) / 100);
	}

}
