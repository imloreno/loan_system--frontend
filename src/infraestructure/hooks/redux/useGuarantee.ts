import { useDispatch, useSelector } from "react-redux";
import {
  updateGuarantee,
  refreshGuaranteeList,
  addGuarantee as addGuaranteeAction,
  deleteGuarantee as deleteGuaranteeAction,
} from "application/redux/reducers/guaranteeSlice";
import {
  formatGuaranteeToApi,
  formatGuaranteeToRedux,
} from "infraestructure/gateways/format/guaranteeReduxFormat";
import { IGuarantee } from "interfaces/guarantee";
import { RootState } from "application/redux/store";
import {
  apiAddGuarantee,
  apiDeleteGuarantee,
  apiGetGuaranteeList,
} from "infraestructure/api/guarantee";

const useGuarantee = () => {
  const dispatch = useDispatch();
  const guaranteesList = useSelector(
    (state: RootState) => state.guarantee.guaranteeList
  );

  //Refresh Guarantee list
  const refreshGuarantees = async () => {
    const data = await apiGetGuaranteeList();
    const formatted: IGuarantee[] = data.map(formatGuaranteeToRedux);
    dispatch(refreshGuaranteeList(formatted));
  };

  //refresh once
  const refreshOnce = (Guarantee: IGuarantee) => {
    dispatch(updateGuarantee(Guarantee));
  };

  //AddGuarantee
  const addGuarantee = (Guarantee: IGuarantee) => {
    apiAddGuarantee(formatGuaranteeToApi(Guarantee));
    dispatch(addGuaranteeAction(Guarantee));
  };

  //Delete Guarantee
  const deleteGuarantee = (id: number) => {
    apiDeleteGuarantee(id);
    dispatch(deleteGuaranteeAction(id));
  };

  return {
    guaranteesList,
    refreshGuarantees,
    addGuarantee,
    refreshOnce,
    deleteGuarantee,
  };
};

export { useGuarantee };
