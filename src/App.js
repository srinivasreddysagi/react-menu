import { useEffect, useState } from "react";
import items from "./items.js";
import ButtonFamily from "./components/ButtonFamily";
import Item from "./components/Item";

function App() {
    const [list, setList] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const menu = new Set();
        menu.add("All");
        items.forEach((item) => {
            menu.add(item.category);
        });
        setList(Array.from(menu));
    }, []);

    useEffect(() => {
        setCourses(items);
    }, []);

    function filterItems(category) {
        if (category === "All") {
            setCourses(items);
        } else {
            const temp = items.filter((course) => course.category === category);
            setCourses(temp);
        }
    }

    return (
        <main className="component">
            <div className="title">
                <h1>Courses</h1>
                <div className="bar"></div>
            </div>
            <div className="nav">
                {list.map((i) => (
                    <ButtonFamily
                        filterItems={filterItems}
                        category={i}
                    ></ButtonFamily>
                ))}
            </div>
            <div className="items">
                {courses.map((course) => (
                    <Item {...course}></Item>
                ))}
            </div>
        </main>
    );
}

export default App;
