import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import pokemon from 'https://esm.sh/v99/pokemon@2.3.3/data/zh-hans.json';
const pokemonList = pokemon || []
export default function Home() {
  
  return (
    <>
      <Head>
        <title>Pokemon list by Fresh</title>
      </Head>
      <div>
        <ul>
          {
            pokemonList?.map((item, index) => {
              return <div><a href={`https://wiki.52poke.com/wiki/${item}`}><li key={index}>{index} - {item}</li></a>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" /></div>
            })
          }
        </ul>
        {/* <Counter start={3} /> */}
      </div>
    </>
  );
}
