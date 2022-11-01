import React from "react";
import { useDispatch } from "react-redux";

import { uuid } from "../../utils/uuid";
import { componentsActions } from "../../store/components";
import { AvailableComponents } from "../Components";

import "./components-picker.css";
import { useSelector } from "react-redux";

export const ComponentsPicker = ({ lockedPicker }) => {
  const items = useSelector((state) => state.components?.items);
  const currentlyEdited = useSelector(
    (state) => state.components?.currentlyEdited
  );

  const dispatch = useDispatch();
  const onComponentClick = (layout) =>
    dispatch(componentsActions.addComponent({ id: uuid(), layout }));

  return (
    <div className={`components-picker`}>
      {AvailableComponents.map((component) => (
        <div
          className={`components-picker__component${
            lockedPicker ? "--disabled" : ""
          }`}
          key={component.layout}
          onClick={() => onComponentClick(component.layout)}
        >
          <span className="components-picker__component-label">
            {component.label}
          </span>
        </div>
      ))}
    </div>
  );
};
