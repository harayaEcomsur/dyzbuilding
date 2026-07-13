export type ContratoTipo = 'prestacion_servicios' | 'compraventa' | 'confidencialidad' | 'otro'
export type ContratoEstado = 'borrador' | 'emitido'

export interface Clausula {
  id: number
  titulo: string
  contenido: string
}

export interface Parte {
  nombre: string
  rut: string
  tipo: 'empresa' | 'persona'
  representante: string
  cargoRep: string
  direccion: string
  ciudad: string
  email: string
}

export interface Firmante {
  id: number
  nombre: string
  rut: string
  cargo: string
  parteLabel: string
}

export interface ContratoData {
  meta: {
    numero: string
    fecha: string
    ciudad: string
    tipo: ContratoTipo
  }
  partes: {
    mandante: Parte
    contratista: Parte
  }
  clausulas: Clausula[]
  firmantes: Firmante[]
}

export interface ContratoRecord {
  id: string
  numero: string
  contraparte: string
  fecha: string
  tipo: ContratoTipo
  estado: ContratoEstado
  data: ContratoData
  createdAt: string
  updatedAt: string
  parentId?: string
}

export function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

export const TIPOS_CONTRATO: Record<ContratoTipo, string> = {
  prestacion_servicios: 'Prestación de Servicios',
  compraventa: 'Compraventa',
  confidencialidad: 'Confidencialidad',
  otro: 'Otro',
}

export function getDefaultClausulas(tipo: ContratoTipo): Clausula[] {
  if (tipo === 'prestacion_servicios') {
    return [
      { id: 1, titulo: 'PRIMERO: OBJETO DEL CONTRATO', contenido: 'Por el presente instrumento, EL CONTRATISTA se obliga a prestar a EL MANDANTE los servicios de [descripción de servicios], según las especificaciones técnicas acordadas entre las partes, que se entenderán incorporadas al presente contrato.' },
      { id: 2, titulo: 'SEGUNDO: PLAZO DE EJECUCIÓN', contenido: 'Los servicios objeto del presente contrato deberán ejecutarse en un plazo de [__] días corridos, contados desde la fecha de suscripción del presente instrumento o desde la fecha de pago del anticipo pactado, lo que ocurra primero.' },
      { id: 3, titulo: 'TERCERO: PRECIO Y FORMA DE PAGO', contenido: 'El precio total convenido asciende a la suma de $[______] ([______] pesos chilenos), más el Impuesto al Valor Agregado (IVA) correspondiente.\n\nEL MANDANTE pagará dicho precio de la siguiente forma:\na) 50% al momento de la suscripción del presente contrato, como anticipo.\nb) 50% restante, contra recepción conforme de los servicios.' },
      { id: 4, titulo: 'CUARTO: OBLIGACIONES DE EL CONTRATISTA', contenido: 'EL CONTRATISTA se obliga a:\na) Ejecutar los servicios contratados con la debida diligencia y pericia, dentro del plazo convenido.\nb) Emplear personal calificado y materiales de primera calidad.\nc) Contar con los seguros laborales vigentes exigidos por la Ley N°16.744.\nd) Cumplir con las normativas de seguridad e higiene aplicables (DS N°594, DS N°40 y demás pertinentes).\ne) Informar oportunamente a EL MANDANTE de cualquier situación que pueda afectar el normal desarrollo de los servicios.' },
      { id: 5, titulo: 'QUINTO: OBLIGACIONES DE EL MANDANTE', contenido: 'EL MANDANTE se obliga a:\na) Pagar el precio convenido en los plazos estipulados.\nb) Proveer acceso oportuno a las instalaciones donde se ejecutarán los servicios.\nc) Designar un interlocutor válido para la coordinación de los trabajos.\nd) Recibir los servicios ejecutados conforme a lo contratado, otorgando la respectiva conformidad por escrito.' },
      { id: 6, titulo: 'SEXTO: GARANTÍA', contenido: 'EL CONTRATISTA otorga una garantía de [__] meses sobre los trabajos ejecutados, contados desde la fecha de recepción conforme. Durante dicho período, EL CONTRATISTA se obliga a subsanar, sin costo para EL MANDANTE, cualquier defecto o falla imputable a la ejecución de los servicios.' },
      { id: 7, titulo: 'SÉPTIMO: CONFIDENCIALIDAD', contenido: 'Las partes se obligan a guardar estricta confidencialidad respecto de toda información técnica, comercial, financiera o de cualquier otra naturaleza que, con motivo del presente contrato, una parte proporcione a la otra. Esta obligación se extenderá por un plazo de dos (2) años contados desde la terminación del contrato.' },
      { id: 8, titulo: 'OCTAVO: PROPIEDAD INTELECTUAL Y ENTREGABLES', contenido: 'Todos los planos, memorias de cálculo, informes técnicos y demás documentos elaborados por EL CONTRATISTA en el marco del presente contrato pasarán a ser de exclusiva propiedad de EL MANDANTE una vez realizado el pago total del precio convenido.' },
      { id: 9, titulo: 'NOVENO: RESPONSABILIDAD', contenido: 'La responsabilidad máxima de EL CONTRATISTA frente a EL MANDANTE, por cualquier causa derivada del presente contrato, quedará limitada al monto total del precio pactado. En ningún caso EL CONTRATISTA responderá por daños indirectos, lucro cesante o pérdida de oportunidades comerciales.' },
      { id: 10, titulo: 'DÉCIMO: TÉRMINO ANTICIPADO', contenido: 'Cualquiera de las partes podrá poner término anticipado al presente contrato mediante aviso escrito con a lo menos quince (15) días hábiles de anticipación, en los siguientes casos:\na) Incumplimiento grave de las obligaciones contraídas.\nb) Caso fortuito o fuerza mayor que haga imposible la ejecución de los servicios.\n\nEl término anticipado no dará lugar a indemnización alguna, salvo que sea imputable a culpa o dolo de una de las partes.' },
      { id: 11, titulo: 'UNDÉCIMO: DOMICILIO Y JURISDICCIÓN', contenido: 'Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la ciudad de Santiago de Chile y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia, renunciando expresamente a cualquier otro fuero o jurisdicción que pudiere corresponderles.' },
    ]
  }
  if (tipo === 'compraventa') {
    return [
      { id: 1, titulo: 'PRIMERO: OBJETO DE LA COMPRAVENTA', contenido: 'EL VENDEDOR vende y transfiere a EL COMPRADOR, quien compra y adquiere, el bien consistente en [descripción detallada del bien], en el estado de conservación en que se encuentra y que EL COMPRADOR declara conocer y aceptar.' },
      { id: 2, titulo: 'SEGUNDO: PRECIO', contenido: 'El precio de la presente compraventa se fija en la suma de $[______] ([______] pesos chilenos), más el Impuesto al Valor Agregado cuando corresponda.' },
      { id: 3, titulo: 'TERCERO: FORMA DE PAGO', contenido: 'El precio se pagará de la siguiente forma:\na) $[______] al contado, en este acto, mediante [forma de pago].\nb) El saldo de $[______] se pagará en [__] cuotas mensuales de $[______] cada una, venciendo la primera el día [__] del mes de [__].' },
      { id: 4, titulo: 'CUARTO: ENTREGA Y RECEPCIÓN', contenido: 'La entrega material del bien se realizará en [lugar de entrega], el día [__] de [mes] de [año], o en la fecha que las partes acuerden por escrito. EL COMPRADOR deberá recibir el bien en dicha oportunidad, otorgando el correspondiente recibo de conformidad.' },
      { id: 5, titulo: 'QUINTO: SANEAMIENTO Y GARANTÍA DE EVICCIÓN', contenido: 'EL VENDEDOR garantiza que el bien objeto de esta compraventa es de su exclusiva propiedad, que se encuentra libre de todo gravamen, prohibición, hipoteca, litigio, embargo u otro impedimento que pudiera afectar la libre disposición del mismo. EL VENDEDOR asume la obligación de saneamiento y garantía de evicción conforme a las normas del Código Civil.' },
      { id: 6, titulo: 'SEXTO: TRANSFERENCIA DE RIESGOS Y DOMINIO', contenido: 'El dominio del bien se transferirá a EL COMPRADOR desde la entrega material del mismo. Los riesgos de pérdida, deterioro o destrucción fortuita serán de cargo de EL COMPRADOR desde el momento de la entrega.' },
      { id: 7, titulo: 'SÉPTIMO: INCUMPLIMIENTO', contenido: 'En caso de incumplimiento en el pago por parte de EL COMPRADOR, EL VENDEDOR podrá, a su elección:\na) Exigir el cumplimiento forzado de la obligación, con los intereses legales correspondientes.\nb) Declarar resuelto el contrato y solicitar la restitución del bien, reteniendo las sumas ya pagadas como compensación de perjuicios.\n\nPara el ejercicio de estas opciones, bastará la mora del comprador en el pago de cualquier cuota.' },
      { id: 8, titulo: 'OCTAVO: DOMICILIO Y JURISDICCIÓN', contenido: 'Para todos los efectos legales derivados del presente contrato, las partes fijan su domicilio en la ciudad de Santiago de Chile y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.' },
    ]
  }
  if (tipo === 'confidencialidad') {
    return [
      { id: 1, titulo: 'PRIMERO: DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL', contenido: 'Para los efectos del presente acuerdo, se entenderá por "Información Confidencial" toda información técnica, comercial, financiera, operacional, estratégica o de cualquier otra índole que una parte (la "Parte Divulgante") proporcione a la otra (la "Parte Receptora"), ya sea en forma verbal, escrita, electrónica o por cualquier otro medio, con motivo o en el contexto de [describir la relación o proyecto]. Se incluye especialmente: datos de clientes, procesos productivos, proyectos en desarrollo, estructuras de precios, know-how y cualquier otra información designada expresamente como confidencial.' },
      { id: 2, titulo: 'SEGUNDO: OBLIGACIONES DE CONFIDENCIALIDAD', contenido: 'La Parte Receptora se obliga a:\na) Mantener la Información Confidencial en estricto secreto y no divulgarla a terceros, sin el previo consentimiento escrito de la Parte Divulgante.\nb) Utilizar la Información Confidencial exclusivamente para los fines del acuerdo entre las partes.\nc) Implementar medidas de seguridad razonables para proteger la Información Confidencial contra acceso no autorizado.\nd) Limitar el acceso a la Información Confidencial a sus empleados, funcionarios o asesores que la necesiten estrictamente para los fines autorizados, asegurándose de que dichas personas queden vinculadas por obligaciones de confidencialidad equivalentes a las del presente acuerdo.' },
      { id: 3, titulo: 'TERCERO: EXCEPCIONES', contenido: 'Las obligaciones del presente acuerdo no se aplicarán a la información que:\na) Sea o se torne de dominio público sin que medie incumplimiento de la Parte Receptora.\nb) Sea conocida por la Parte Receptora con anterioridad a la divulgación por parte de la Parte Divulgante, según conste en registros fehacientes.\nc) Sea recibida lícitamente de un tercero sin restricción de confidencialidad.\nd) Sea desarrollada de manera independiente por la Parte Receptora sin uso de la Información Confidencial.\ne) Deba ser revelada por mandato legal o resolución judicial, en cuyo caso la Parte Receptora deberá notificar previamente y por escrito a la Parte Divulgante, en la medida que ello sea legalmente posible.' },
      { id: 4, titulo: 'CUARTO: PLAZO', contenido: 'El presente acuerdo tendrá una vigencia de [__] años contados desde su suscripción. Las obligaciones de confidencialidad subsistirán por un período adicional de [__] años una vez vencido el plazo de vigencia o terminado el acuerdo por cualquier causa.' },
      { id: 5, titulo: 'QUINTO: DEVOLUCIÓN O DESTRUCCIÓN DE INFORMACIÓN', contenido: 'A la terminación del presente acuerdo, o cuando así lo requiera la Parte Divulgante, la Parte Receptora deberá, a elección de la Parte Divulgante: (a) devolver toda la Información Confidencial recibida en cualquier soporte; o (b) destruirla de forma segura, confirmando dicha destrucción por escrito dentro de los cinco (5) días hábiles siguientes.' },
      { id: 6, titulo: 'SEXTO: INDEMNIZACIÓN Y REMEDIOS', contenido: 'Las partes reconocen que el incumplimiento de las obligaciones de confidencialidad podría causar daños irreparables a la Parte Divulgante para los cuales la indemnización monetaria pudiera ser un remedio insuficiente. En consecuencia, la Parte Divulgante tendrá derecho a solicitar medidas cautelares y/o prohibitivas ante los tribunales competentes, sin perjuicio de cualquier otro remedio disponible en ley o equidad.' },
      { id: 7, titulo: 'SÉPTIMO: DOMICILIO Y JURISDICCIÓN', contenido: 'Para todos los efectos legales del presente acuerdo, las partes fijan su domicilio en la ciudad de Santiago de Chile y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.' },
    ]
  }
  // tipo === 'otro'
  return [
    { id: 1, titulo: 'PRIMERO: OBJETO', contenido: 'Por el presente instrumento, las partes acuerdan [describir el objeto del contrato], en los términos y condiciones que se estipulan a continuación.' },
    { id: 2, titulo: 'SEGUNDO: OBLIGACIONES DE LAS PARTES', contenido: 'EL MANDANTE se obliga a:\na) [Obligación 1]\nb) [Obligación 2]\n\nEL CONTRATISTA se obliga a:\na) [Obligación 1]\nb) [Obligación 2]' },
    { id: 3, titulo: 'TERCERO: PRECIO Y FORMA DE PAGO', contenido: 'El precio convenido asciende a $[______] ([______] pesos chilenos). Dicho precio será pagado de la siguiente forma: [describir forma de pago].' },
    { id: 4, titulo: 'CUARTO: PLAZO', contenido: 'El presente contrato tendrá una vigencia de [__] meses/años contados desde su suscripción, pudiendo ser renovado por igual período si ninguna de las partes manifiesta su intención de no renovarlo con a lo menos [__] días de anticipación al vencimiento.' },
    { id: 5, titulo: 'QUINTO: DOMICILIO Y JURISDICCIÓN', contenido: 'Para todos los efectos legales del presente contrato, las partes fijan su domicilio en la ciudad de Santiago de Chile y se someten a la jurisdicción de sus Tribunales Ordinarios de Justicia.' },
  ]
}
