package com.integracion.model;

import com.integracion.interfaces.ICalculaIva;

public class CalcularIvaBean implements ICalculaIva {

	@Override
	public int iva(int valor, int porcentaje) {
		return valor + ((valor * porcentaje) / 100);
	}

}
