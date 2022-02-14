import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="OYUN QAYDALARI" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>Şəhər və ya rayon adını 6 gedişdə tapın</div>
        <div>Hər bir təxmin etibarlı şəhər və ya olmalıdır.</div>
        <div>
          Hər təxmindən sonra siz təxmin etdiyiniz və hədəf şəhər ilə məsafə,
          istiqamət və yaxınlıq əldə edəcəksiniz.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Məsələn</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Quba",
                direction: "SE",
                distance: 300_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">Chile</span> is{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} away from the
            target country, the target country is in the North-East direction
            and you have a only 32% of proximity because it&apos;s quite far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finland",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">Finland</span> is getting
            closer! {formatDistance(3206000, settingsData.distanceUnit)} away,
            South-East direction and 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Lebanon",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Lebanon</span>,
            it&apos;s the country to guess! Congrats! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Worldle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">About distance</div>
        <div>
          The distances displayed correspond to the distances between the
          selected and the target territory centers.
        </div>
        <div>
          For instance, the computed distance between United States and Canada
          is around {formatDistance(2_260_000, settingsData.distanceUnit)} even
          if they have a common border.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Made by{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>
        </div>
      </div>
    </Panel>
  );
}
