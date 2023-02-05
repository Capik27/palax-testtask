import { useContext } from "react";
import { StoreCtx } from "../providers/StoreProvider";

export const useStore = () => useContext(StoreCtx);
