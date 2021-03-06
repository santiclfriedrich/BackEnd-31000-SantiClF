import dotenv from "dotenv";
dotenv.config();

//config
export default {
  mongo: {
    connectionString: process.env.PAK_MONGO,
  },
  firebase: {
    "type": "service_account",
    "project_id": "coderhouse-7fadd",
    "private_key_id": "aa1074bcec805fd3ce614d66cc5248ef367d78b6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCxpFUKnsrD+Olc\nxiAbUT7hK8jl6HvfsYULAb6Ui2aG11in1PrxTSDLnyRdkLCz3hV5pU73rLQ4XfLa\n+WHpKlJTaQJ1G/0qgOn+zSLzYZAVVG0o2Esn2sdBSz5q7gMRaiutPlwTqEO4sdH1\nUCA8Oko/EiAPiqyCp5CsWJ66TpLtTpIRRddbD921htdNuC4i0IPIB9pCDTniItrx\nN1Ng4sHZfsKOFVL5QTmbVEdKQ8PDZThxlb3aHxEEygZVO+D6tN6sLNwqSjb62PVa\nmnk03abpdyNY0s2BZCfmCIz+3xuvXjjYsmTJDlav6kfENSKgIr43QtRj9cDV6J2f\nIpa5Z5XRAgMBAAECggEAQV81snZULQEtM6hviU4BQ1DfGghPibbkvHO0ZCrWnJmj\n9QNSI7mb74MNmWcVN+Pq6Dy2zjteiP290OqEJw+dgzd6IYmexWTyd4ObMJB/OvI6\nR5UtNynyOKuNeUFEnMSC9TqlHNDHtzCtEMcfTbqvtv0fEkkYie5LNblZFDu1IyGx\nc/HbZQisy14N/E0hbzVZUUvURG9fPxWH0kyI9BdXUXI0Ggd0+9i8r2IytJey1vwa\nn5738ZCU+faCrrHR2znae6UeSstONtWhOCivS+AyzY+iy+n/dHTweubmIWHMpPia\naTHZ7tsrr/EwRNtFVVukWqbIHkR9+YhV6jPGR0DE3wKBgQDYMEbWQ1Q5C7ka741M\nwEiKVSx43drrCV0Nb2mXKIsvDhVuwSLSlR17gmRiZcUUUrHpQcd5O9yAsVvagV53\nhqokq6lBLot8p/rP/hfCU4P5x8nfmnZrY7E86CbS8OPiEcqJ+DUy1GWgI6O8xVg7\nwaB6G1TLHnB5y6zsGdfvn9H/uwKBgQDSWtw0p56quqlRfsphMrxHLxHm9A5ZSWsQ\nYwMONOkQk2GrF+hb6nSnHCjuZnZWawm/vMCFdS5MxKb1UwH6oUpGSS/BWIhKTigP\nkla45CBH3VRUtJIstWkdVsPk0XkWrKROlnsHRDhsznLrt1nrdA9CQ6t5UILOmD/O\npEYe1rjJ4wKBgDTJROKYOf5b0Gy1RSkSYiP0vBEfCo8NED1xkLSp36IzrCQI4HnO\nkw5PPjeQZdiagHpV52DArwx1QdpOcER7Cxw9FeymcsSTN3iFsENwpO7eS3pfer6p\n7uLSRHiI/Pt8IJojksnAdrftO9Oh0/NzSb3G4qNd4VS72JMllEYcHeh1AoGAU2+8\nxpnyApBVlsCu74zbR3TxKeWGR34qnG5ZiOoNxAhhhibOgJ7ntF0kEyPLLo34aPgq\neQU43zRlcQuCznHpbyWabpt6O9byZvLJuT6rWzX8PDj/fgJa9kszGnDIEelapt1j\nYUd7BhWBWeP5I75+Su9idZUsvVuAe6uHMLZEx7cCgYBfeD0575/KjiGGzeUkbz0e\nH7X/h6X3dh00tuDn9ZElOV2FV/7nv8yclM6c5uxzeijJ7JlmqZxScekRodTE4HXl\nSPoCOjsz9Hsom712inoF5Y10r0sJeYQTgVhIL2kyoPPm6c/lult/AagGXAykyMNo\nQ3QRcJwOp84DKV4bVa718Q==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-kanul@coderhouse-7fadd.iam.gserviceaccount.com",
    "client_id": "117674691362611338841",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kanul%40coderhouse-7fadd.iam.gserviceaccount.com"
  },
   
};