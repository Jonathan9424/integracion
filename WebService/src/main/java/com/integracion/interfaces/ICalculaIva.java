package com.integracion.interfaces;

import javax.ejb.Local;

@Local	
public interface ICalculaIva {

	public int iva(int valor, int porcentaje);
}
