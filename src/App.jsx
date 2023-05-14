import React, { useState } from "react";
import "./style.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");
  const [reminder, setReminder] = useState(false);
  const [priority, setPriority] = useState("");
  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("list");

  function addTodo() {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        category,
        reminder,
        priority,
        timestamp: Date.now(),
      };
      setTodos(function (prevTodos) {
        return [...prevTodos, newTodo];
      });
      setInputValue("");
      setCategory("");
      setReminder(false);
      setPriority("");
    }
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(function (todo) {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  }

  function updateTodo(id, newText) {
    const updatedTodos = todos.map(function (todo) {
      return todo.id === id
        ? { ...todo, text: newText, timestamp: Date.now() }
        : todo;
    });
    setTodos(updatedTodos);
  }

  function filterTodos(filterValue) {
    setFilter(filterValue);
  }

  function sortTodos(sortValue) {
    setSort(sortValue);
  }

  function searchTodos() {
    console.log("Searching todos:", searchText);
  }

  function handleViewChange(viewType) {
    setView(viewType);
  }

  function TodoItem({ todo }) {
    const { id, text, category, reminder, priority, timestamp } = todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    function handleEditStart() {
      setIsEditing(true);
    }

    function handleEditEnd() {
      setIsEditing(false);
      setEditedText(text);
    }

    function handleRename() {
      if (editedText.trim() !== "") {
        updateTodo(id, editedText);
        handleEditEnd();
      }
    }


    function handleTextChange(e) {
      setEditedText(e.target.value);
    }

    return (
      <li key={id}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedText}
              onChange={handleTextChange}
              autoFocus
            />
            <button onClick={handleRename}>Save</button>
            <button onClick={handleEditEnd}>Cancel</button>
          </div>
        ) : (
          <div>
            <span onDoubleClick={handleEditStart}>{text}</span>
            <span>Category: {category}</span>
            <span>Reminder: {reminder ? "Set" : "Not Set"}</span>
            <span>Priority: {priority}</span>
            <span>Last Edited: {new Date(timestamp).toLocaleString()}</span>

            <button onClick={() => deleteTodo(id)}>Delete</button>
            <button onClick={handleEditStart}>Rename</button>
          </div>
        )}
      </li>
    );
  }

  const filteredTodos = todos.filter(function (todo) {
    if (filter === "all") {
      return true;
    } else if (filter === "category" && todo.category === category) {
      return true;
    } else if (filter === "reminder" && todo.reminder) {
      return true;
    } else if (filter === "priority" && todo.priority === priority) {
      return true;
    }
    return false;
  });

  const sortedTodos = [...filteredTodos].sort(function (a, b) {
    if (sort === "newest") {
      return b.timestamp - a.timestamp;
    } else if (sort === "oldest") {
      return a.timestamp - b.timestamp;
    }
    return 0;
  });

  const searchResults = sortedTodos.filter(function (todo) {
    return todo.text.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
      />
      <input
        type="text"
        value={category}
        onChange={function (e) {
          setCategory(e.target.value);
        }}
        placeholder="Category"
      />
      <label>
        Reminder:
        <input
          type="checkbox"
          checked={reminder}
          onChange={function (e) {
            setReminder(e.target.checked);
          }}
        />
      </label>
      <input
        type="text"
        value={priority}
        onChange={function (e) {
          setPriority(e.target.value);
        }}
        placeholder="Priority"
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <label>
          Filter By:
          <select
            value={filter}
            onChange={function (e) {
              filterTodos(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="category">Category</option>
            <option value="reminder">Reminder</option>
            <option value="priority">Priority</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Sort By:
          <select
            value={sort}
            onChange={function (e) {
              sortTodos(e.target.value);
            }}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>
      </div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={function (e) {
            setSearchText(e.target.value);
          }}
          placeholder="Search"
        />
        <button onClick={searchTodos}>Search</button>
      </div>
      <div className="last">
        <button onClick={() => handleViewChange("list")}>List View</button>
        <button onClick={() => handleViewChange("grid")}>Grid View</button>
      </div>
      {view === "list" ? (
        <ul>
          {searchResults.map(function (todo) {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      ) : (
        <div className="grid-view">
          {searchResults.map(function (todo) {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TodoApp;
