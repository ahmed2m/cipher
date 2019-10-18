import Caeser from "../CipherMethods/Caeser";
import Playfair from "../CipherMethods/Playfair";
import Monoalphabetic from "../CipherMethods/Monoalphabetic";


const encryptionMethods = {
    "Monoalphabetic":Monoalphabetic,
    "Caeser":Caeser,
    "Playfair":Playfair,
}

export default encryptionMethods;
