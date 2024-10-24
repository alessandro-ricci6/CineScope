//import { useParams } from "react-router-dom";
import back from "../assets/test/backdrop.jpg";
import poster from "../assets/test/poster.jpg";

export default function MoviePage() {
  //const {id} = useParams<string>();
  return (
    <div className="w-screen h-screen">
      <img
        src={back}
        alt="backdrop"
        className="h-auto w-full fixed -z-10 opacity-35"
      />
      <div>
        <div className="flex flex-row ml-20 items-center translate-y-12">
          <img
            src={poster}
            alt="Poster"
            className="w-1/6 h-auto rounded-md shadow-md"
          />
          <h2 className="font-bold text-5xl ml-10 translate-y-16 text-white">Thor</h2>
        </div>
        <div className="w-full bg-white">
          <div className="flex flex-row divide-x">
            <div className="w-1/4 text-black border-r pt-14 flex flex-col">
              <div className="divide-y divide-slate-500">
                <div className="px-5 py-5">
                  <h3 className="font-bold text-md">Generi</h3>
                  <ul className="list-disc list-inside">
                    <li className="pl-3">Azione</li>
                    <li className="pl-3">Avventura</li>
                    <li className="pl-3">Fantasy</li>
                  </ul>
                </div>

                <div className="px-5 py-5 flex flex-row items-baseline">
                  <h3 className="font-bold text-md mr-2">Durata:</h3>
                  <p>1h 55m</p>
                </div>

                <div className="px-5 py-5 flex flex-row items-baseline">
                  <h3 className="font-bold text-md mr-2">Release date:</h3>
                  <p>27/04/2011</p>
                </div>

                <div>
                  <div className="px-5 pt-5 flex flex-row items-baseline">
                    <h3 className="font-bold text-md mr-2">Budget:</h3>
                    <p>150.000.000 $</p>
                  </div>
                  <div className="px-5 pb-5 flex flex-row items-baseline">
                    <h3 className="font-bold text-md mr-2">Production:</h3>
                    <p>Marvel Studios</p>
                  </div>
                </div>
              </div>

              <button className="my-2 mx-7">Add to the watchlist</button>
              <button className="my-2 mx-7">Mark as seen</button>
            </div>
            <div className="w-3/4">
              <p>aega</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
