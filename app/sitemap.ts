import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dyzbuilding.cl'
  const now = new Date()
  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/`,
          en: `${siteUrl}/en/`,
          'x-default': `${siteUrl}/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: `${siteUrl}/`,
          en: `${siteUrl}/en/`,
          'x-default': `${siteUrl}/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/`,
          en: `${siteUrl}/en/guide/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/choosing-hvac-system-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
          en: `${siteUrl}/en/guide/choosing-hvac-system-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
          en: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
          en: `${siteUrl}/en/guide/energy-efficiency-hvac-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          en: `${siteUrl}/en/guide/hvac-regulations-chile-foreign-companies/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
          en: `${siteUrl}/en/guide/what-is-a-vrf-system/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/`,
          en: `${siteUrl}/en/sectors/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/agro/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/agroindustria/`,
          en: `${siteUrl}/en/sectors/agro/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/data-centers/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/data-centers/`,
          en: `${siteUrl}/en/sectors/data-centers/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/education/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/educacion/`,
          en: `${siteUrl}/en/sectors/education/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/food-service/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/restaurantes-alimentacion/`,
          en: `${siteUrl}/en/sectors/food-service/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/health/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/salud/`,
          en: `${siteUrl}/en/sectors/health/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/hotels/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/hoteleria/`,
          en: `${siteUrl}/en/sectors/hotels/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/industrial/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/plantas-industriales/`,
          en: `${siteUrl}/en/sectors/industrial/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/laboratories/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/laboratorios-centros-id/`,
          en: `${siteUrl}/en/sectors/laboratories/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/mining/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/mineria/`,
          en: `${siteUrl}/en/sectors/mining/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/offices/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/oficinas/`,
          en: `${siteUrl}/en/sectors/offices/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/pharmaceutical/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/farmaceutica/`,
          en: `${siteUrl}/en/sectors/pharmaceutical/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/retail/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/retail/`,
          en: `${siteUrl}/en/sectors/retail/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/shopping-centers/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/centros-comerciales/`,
          en: `${siteUrl}/en/sectors/shopping-centers/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/sports-facilities/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/centros-deportivos/`,
          en: `${siteUrl}/en/sectors/sports-facilities/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/sectors/warehousing/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/bodegas-logistica/`,
          en: `${siteUrl}/en/sectors/warehousing/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/`,
          en: `${siteUrl}/en/services/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/bim-hvac-modeling/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
          en: `${siteUrl}/en/services/bim-hvac-modeling/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/commercial-refrigeration/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/refrigeracion-comercial/`,
          en: `${siteUrl}/en/services/commercial-refrigeration/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/energy-efficiency/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/eficiencia-energetica/`,
          en: `${siteUrl}/en/services/energy-efficiency/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/industrial-ventilation/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/ventilacion-industrial/`,
          en: `${siteUrl}/en/services/industrial-ventilation/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/preventive-maintenance/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/mantenimiento-preventivo/`,
          en: `${siteUrl}/en/services/preventive-maintenance/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/turnkey-projects/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
          en: `${siteUrl}/en/services/turnkey-projects/`,
        },
      },
    },
    {
      url: `${siteUrl}/en/services/vrf-systems/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/climatizacion-vrf/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/`,
          en: `${siteUrl}/en/guide/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/como-elegir-sistema-hvac-empresa-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/decreto-supremo-594-ventilacion-hvac-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/eficiencia-energetica-hvac-empresas-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/mantenimiento-preventivo-hvac-empresas-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/precio-climatizacion-comercial-chile/`,
          en: `${siteUrl}/en/guide/commercial-hvac-costs-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/precio-sistema-vrf-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/que-es-un-sistema-vrf/`,
        },
      },
    },
    {
      url: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/guias/vrf-vs-chiller-cual-elegir-empresa-chile/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/`,
          en: `${siteUrl}/en/sectors/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/agroindustria/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/agroindustria/`,
          en: `${siteUrl}/en/sectors/agro/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/bodegas-logistica/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/bodegas-logistica/`,
          en: `${siteUrl}/en/sectors/warehousing/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/centros-comerciales/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/centros-comerciales/`,
          en: `${siteUrl}/en/sectors/shopping-centers/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/centros-deportivos/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/centros-deportivos/`,
          en: `${siteUrl}/en/sectors/sports-facilities/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/data-centers/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/data-centers/`,
          en: `${siteUrl}/en/sectors/data-centers/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/educacion/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/educacion/`,
          en: `${siteUrl}/en/sectors/education/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/farmaceutica/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/farmaceutica/`,
          en: `${siteUrl}/en/sectors/pharmaceutical/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/hoteleria/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/hoteleria/`,
          en: `${siteUrl}/en/sectors/hotels/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/laboratorios-centros-id/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/laboratorios-centros-id/`,
          en: `${siteUrl}/en/sectors/laboratories/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/mineria/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/mineria/`,
          en: `${siteUrl}/en/sectors/mining/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/oficinas/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/oficinas/`,
          en: `${siteUrl}/en/sectors/offices/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/plantas-industriales/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/plantas-industriales/`,
          en: `${siteUrl}/en/sectors/industrial/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/restaurantes-alimentacion/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/restaurantes-alimentacion/`,
          en: `${siteUrl}/en/sectors/food-service/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/retail/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/retail/`,
          en: `${siteUrl}/en/sectors/retail/`,
        },
      },
    },
    {
      url: `${siteUrl}/sectores/salud/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${siteUrl}/sectores/salud/`,
          en: `${siteUrl}/en/sectors/health/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/`,
          en: `${siteUrl}/en/services/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/climatizacion-vrf/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/climatizacion-vrf/`,
          en: `${siteUrl}/en/services/vrf-systems/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/eficiencia-energetica/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/eficiencia-energetica/`,
          en: `${siteUrl}/en/services/energy-efficiency/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/mantenimiento-preventivo/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/mantenimiento-preventivo/`,
          en: `${siteUrl}/en/services/preventive-maintenance/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/modelamiento-bim-hvac/`,
          en: `${siteUrl}/en/services/bim-hvac-modeling/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/proyectos-llave-en-mano/`,
          en: `${siteUrl}/en/services/turnkey-projects/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/refrigeracion-comercial/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/refrigeracion-comercial/`,
          en: `${siteUrl}/en/services/commercial-refrigeration/`,
        },
      },
    },
    {
      url: `${siteUrl}/servicios/ventilacion-industrial/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: {
          es: `${siteUrl}/servicios/ventilacion-industrial/`,
          en: `${siteUrl}/en/services/industrial-ventilation/`,
        },
      },
    },
  ]
}
