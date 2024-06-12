import Content  from "./Content";
import Card  from "./Card";

function Container() {
    return (
        <div>
            {Content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
        </div>
    )
}
export default Container;

