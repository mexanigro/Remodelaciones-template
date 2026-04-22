import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import rawConfig from "../../firebase-applet-config.json";

const firebaseConfig = rawConfig as Record<string, string>;
const REQUIRED_KEYS = ["apiKey", "authDomain", "projectId", "appId"] as const;

const hasValidConfig = REQUIRED_KEYS.every(
  (key) => typeof firebaseConfig[key] === "string" && firebaseConfig[key].trim() !== ""
);

let _db: Firestore | null = null;
let _auth: Auth | null = null;

if (!hasValidConfig) {
  console.warn(
    "[Template Setup] firebase-applet-config.json has empty required fields " +
      `(${REQUIRED_KEYS.join(", ")}). Firebase features are disabled until you add a real config.`
  );
} else {
  try {
    const app = initializeApp(firebaseConfig);
    _db = getFirestore(app);
    _auth = getAuth(app);

    void isSupported()
      .then((ok) => {
        if (ok && firebaseConfig.measurementId) {
          getAnalytics(app);
        }
      })
      .catch(() => {});
  } catch (error) {
    console.error(
      "[Template Setup] Firebase failed to initialize. Verify firebase-applet-config.json values.",
      error
    );
    _db = null;
    _auth = null;
  }
}

export const db = _db as Firestore;
export const auth = _auth as Auth;
export const isFirebaseConfigured = _db !== null && _auth !== null;
