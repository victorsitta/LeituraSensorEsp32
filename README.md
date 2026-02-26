IoT Sensor Monitor
ESP32 + Python Backend + Banco de Dados + Dashboard Web










Índice

1. Visão Geral

2. Arquitetura do Sistema

3. Fluxo de Dados

4. Tecnologias Utilizadas

5. Funcionalidades

6. Estrutura do Projeto

7. Exemplo de Payload

8. Escalabilidade

9. Aplicabilidade

10. Conclusão

1. Visão Geral

Este projeto implementa uma arquitetura completa de monitoramento IoT, integrando hardware embarcado, backend em Python, banco de dados e uma aplicação web para visualização de dados.

O sistema realiza:

Coleta de dados físicos via ESP32

Envio estruturado em formato JSON

Recebimento e validação via API REST

Armazenamento em banco de dados

Exibição organizada em dashboard web

O objetivo é demonstrar integração entre sistemas embarcados e aplicações web modernas, aplicando conceitos de arquitetura em camadas e organização escalável.

2. Arquitetura do Sistema

A arquitetura segue o modelo em camadas:

Responsabilidades por Camada
Camada	Tecnologia	Responsabilidade
Dispositivo	ESP32	Coleta e envio de dados
Backend	Python	API REST, validação e processamento
Banco	SQL/NoSQL	Persistência histórica
Frontend	React	Visualização e monitoramento
3. Fluxo de Dados

O ESP32 coleta dados dos sensores.

Os dados são estruturados em JSON.

O dispositivo envia requisição HTTP ao backend.

O backend valida e armazena no banco.

O frontend consome a API e exibe os dados.

4. Tecnologias Utilizadas
Hardware

ESP32

Sensores ambientais (temperatura, umidade, etc.)

Backend

Python

Framework REST (Flask ou FastAPI)

Banco de Dados

Banco relacional ou não relacional

Estrutura para armazenamento histórico

Frontend

React

TypeScript

TailwindCSS

5. Funcionalidades

Coleta automática de dados via ESP32

Comunicação HTTP com backend

Persistência em banco de dados

Consulta de histórico

Dashboard web responsivo

Indicadores de status do sistema

Estrutura preparada para expansão

6. Estrutura do Projeto
/esp32
    codigo-fonte.ino

/backend
    app.py
    routes.py
    models.py

/database
    schema.sql

/web
    src/
    components/
    pages/

README.md
7. Exemplo de Payload
<details> <summary><strong>Ver exemplo de JSON enviado pelo ESP32</strong></summary>
{
  "device_id": "esp32_01",
  "temperature": 26.4,
  "humidity": 61.2,
  "timestamp": "2026-02-25T14:32:10Z"
}
</details>
8. Escalabilidade

A arquitetura permite evolução para:

Autenticação JWT

Sistema de alertas automáticos

Monitoramento em tempo real com WebSocket

Controle de múltiplos dispositivos

Deploy em nuvem

Análise preditiva baseada em histórico

9. Aplicabilidade

Este modelo pode ser aplicado em:

Monitoramento agrícola

Controle ambiental

Automação residencial

Monitoramento industrial

Projetos acadêmicos

10. Demonstração

Adicione aqui prints ou GIF do sistema:

![Dashboard](./assets/dashboard.png)
![Gateway Status](./assets/status.png)
11. Conclusão

Este projeto demonstra a implementação de um sistema IoT completo, integrando:

Dispositivo embarcado

API backend

Banco de dados

Interface web moderna

A estrutura segue princípios de separação de responsabilidades e escalabilidade, podendo ser expandida para ambientes reais de produção.
