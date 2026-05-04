import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import type { DropResult } from "@hello-pangea/dnd";
type Deal = {
  id: string;
  name: string;
  amount: number;
  probability: number;
};

type ColumnType = {
  name: string;
  items: Deal[];
};

type DataType = {
  [key: string]: ColumnType;
};

type Props = {
  data: DataType;
  setData: (data: DataType) => void;
};

export default function KanbanBoard({ data, setData }: Props) {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceCol = data[source.droppableId];
    const destCol = data[destination.droppableId];

    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];

    const [movedItem] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, movedItem);

    setData({
      ...data,
      [source.droppableId]: {
        ...sourceCol,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destCol,
        items: destItems,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 overflow-x-auto">
        {Object.entries(data).map(([columnId, column]) => (
          <Droppable droppableId={columnId} key={columnId}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-100 rounded-xl p-4 w-72 min-h-[400px]"
              >
                <h2 className="font-bold text-lg mb-4">
                  {column.name}
                </h2>

                {column.items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 mb-3 rounded-lg shadow"
                      >
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ₹{item.amount}
                        </p>

                        <div className="mt-2 text-xs px-2 py-1 bg-blue-500 text-white rounded">
                          {item.probability}%
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}