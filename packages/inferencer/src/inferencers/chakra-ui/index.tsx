import React from "react";
import { ResourceRouterParams, useRouterContext } from "@pankod/refine-core";

import { ShowInferencer } from "./show";
import { ListInferencer } from "./list";
import { CreateInferencer } from "./create";
import { EditInferencer } from "./edit";

import type { InferencerComponentProps } from "../../types";

const ChakraUIInferencer: React.FC<InferencerComponentProps> = ({
    action: actionFromProps,
    id: idFromProps,
    ...props
}) => {
    const { useParams } = useRouterContext();
    const { action, id } = useParams<ResourceRouterParams>();

    switch (actionFromProps ?? action) {
        case "show":
            return <ShowInferencer {...props} id={idFromProps ?? id} />;
        case "create":
            return <CreateInferencer {...props} id={idFromProps ?? id} />;
        case "edit":
            return <EditInferencer {...props} id={idFromProps ?? id} />;
        default:
            return <ListInferencer {...props} id={idFromProps ?? id} />;
    }
};

export { ChakraUIInferencer };
export {
    ListInferencer as ChakraUIListInferencer,
    renderer as ChakraUIListRenderer,
} from "./list";
export {
    ShowInferencer as ChakraUIShowInferencer,
    renderer as ChakraUIShowRenderer,
} from "./show";
export {
    EditInferencer as ChakraUIEditInferencer,
    renderer as ChakraUIEditRenderer,
} from "./edit";
export {
    CreateInferencer as ChakraUICreateInferencer,
    renderer as ChakraUICreateRenderer,
} from "./create";
export * from "../../types";
