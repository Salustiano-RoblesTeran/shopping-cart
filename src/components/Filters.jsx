import '../filters.css'

export function Filters () {
    return (
        <section className="filters">

            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min={0} max={1000}/>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select name="" id="category">
                    <option value="all">Todos</option>
                    <option value="laptos">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>

        </section>
    )
}