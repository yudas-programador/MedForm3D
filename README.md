```markdown
# MedForm3D — Análisis Morfológico y Volumétrico Clínico 3D

¡Bienvenido al repositorio oficial de **MedForm3D**! Este proyecto constituye el desarrollo de la **Tesis de Grado** para la **Universidad Iberoamericana (UNIBE)**, diseñado y sustentado por **Mario de Jesús Guzmán Cabral** y **Melissa**.

MedForm3D es un ecosistema médico-tecnológico avanzado que integra sensores móviles **LiDAR** y modelos de **Visión Artificial (Machine Learning)** para la captura tridimensional, medición exacta de diámetros/volúmenes y el seguimiento evolutivo riguroso de patologías complejas como **Linfedema, Lipedema y Úlceras vasculares**.

---

## 🚀 Características Clave del Proyecto

* **Escaneo Topográfico en Tiempo Real (App iOS):** Interfaz fluida (`ScannerUI`) que proyecta una malla geométrica cian sobre la piel del paciente usando el sensor LiDAR integrado del iPhone.
* **Segmentación Inteligente (MedFormBrain):** Implementación de cuadros delimitadores reactivos en color rojo que aíslan analíticamente la lesión mediante inteligencia artificial.
* **Estructura Clínica por Expedientes:** Separación absoluta y segura de historiales médicos indexados dinámicamente mediante carpetas relacionales para cada paciente clínico utilizando **SwiftData** (Azul Clínico).
* **Analíticas Contextuales Descendentes:** Gráficas predictivas (`EvolutionChartView`) integradas en cada módulo e historial que evalúan el progreso geométrico de sanación de las úlceras o edemas.
* **Exportación de Reportes PDF:** Sistema automático de generación de expedientes médicos imprimibles y exportables en formato PDF a través de un componente dedicado (`PDFGenerator`).
* **Visualización Web Interactiva:** Landing page integrada con **Three.js** que simula proceduralmente la nube de puntos del escáner 3D y permite la rotación manual de la malla morfológica directamente desde cualquier navegador.

---

## 🗂️ Estructura de Archivos (Módulo Web)

Este repositorio contiene los archivos listos para producción para desplegar la plataforma web informativa y el alta de especialistas médicos en **GitHub Pages**:

```bash
├── index.html   # Estructura semántica de la landing page y el formulario de alta
├── styles.css   # Hoja de estilos con el diseño visual táctico (Dark Mode clínico)
└── script.js    # Motor 3D interactivo basado en la librería Three.js
