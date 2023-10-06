import clientPromise from "../lib/mongodb";

export default function Movies({ movies }) {
  console.log(movies)
    return (
        <div>
            <h1>Look at this assortment of seemingly random numbers.</h1>
            <p>
                
            </p>
            <ul>
                {movies.map((movie) => (
                    <li>
                        <h2>{movie._id}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_geospatial");

        const movies = await db
            .collection("shipwrecks")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
}