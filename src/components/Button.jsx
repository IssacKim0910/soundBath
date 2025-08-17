export default function Button() {

    let count = 0;
    const handleClick = (a) => {
        if (count < 3) {
            count++;
            console.log(`${a} you clicked me ${count}`);
        } else {
            console.log(`${a} stop clicking me`);
        }
    }
    const changeClick = (e) => e.target.textContent = "hello";
    return (
        <button onDoubleClick={(e) => changeClick(e)}>click me</button>
    )
}