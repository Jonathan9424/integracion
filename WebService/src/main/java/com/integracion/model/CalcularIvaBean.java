package com.integracion.model;

import javax.ejb.Stateless;

import com.integracion.interfaces.ICalculaIva;

@Stateless
public class CalcularIvaBean implements ICalculaIva {

	@Override
	public int iva(int valor, int porcentaje) {
		porcentaje = (valor * porcentaje) / 100;
		valor += porcentaje;
		return valor;
	}

}
