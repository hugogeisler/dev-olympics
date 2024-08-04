import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { Home } from "@pages/Home";
import { OlympicDataServicesProvider } from "@hoc/olympic-data-service/OlympicDataProvider";
// import { OlympicDataHttpConnector } from "@services/olympic-data/olympic-data-http.connector";
import { OlympicDataService } from "@services/olympic-data/olympic-data.service";
import { OlympicDataInMemoryConnector } from "@services/olympic-data/olympic-data-in-memory.connector";

// const { VITE_OLYMPIC_DATA_API_TIMEOUT, VITE_OLYMPIC_DATA_API_URL } = import.meta
//     .env;

// API
// const olympicDataConnector = new OlympicDataHttpConnector(
//     VITE_OLYMPIC_DATA_API_URL,
//     VITE_OLYMPIC_DATA_API_TIMEOUT
// );
const olympicDataConnector = new OlympicDataInMemoryConnector();
const olympicDataService = new OlympicDataService(olympicDataConnector);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <OlympicDataServicesProvider services={{ olympicDataService }}>
            <Home />
        </OlympicDataServicesProvider>
    </React.StrictMode>
);
