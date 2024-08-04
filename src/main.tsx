import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { Home } from "@pages/Home";
import { OlympicDataServicesProvider } from "@hoc/olympic-data-service/OlympicDataProvider";
import { OlympicDataInMemoryConnector } from "@services/olympic-data/olympic-data-in-memory.connector";
import { OlympicDataService } from "@services/olympic-data/olympic-data.service";
import { SmoothScrollLayout } from "@components/SmoothScroll";
import { OlympicDataConnector } from "@services/olympic-data/olympic-data.interface";
// import { OlympicDataHttpConnector } from "@services/olympic-data/olympic-data-http.connector";

// If we are in development mode, we will use the in-memory connector
// if (import.meta.env.MODE === "production") {
//      connector = new OlympicDataHttpConnector(
//         import.meta.env.VITE_OLYMPIC_DATA_API_URL,
//         import.meta.env.VITE_OLYMPIC_DATA_API_TIMEOUT
//      );
// } else {
//      connector = new OlympicDataInMemoryConnector();
// }

const connector: OlympicDataConnector = new OlympicDataInMemoryConnector();
const olympicDataService = new OlympicDataService(connector);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SmoothScrollLayout>
            <OlympicDataServicesProvider services={{ olympicDataService }}>
                <Home />
            </OlympicDataServicesProvider>
        </SmoothScrollLayout>
    </React.StrictMode>
);
