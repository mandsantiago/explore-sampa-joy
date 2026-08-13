// Gerado a partir das dimensões reais dos arquivos em client/public/images/.
// Usado para setar width/height nas tags <img> e evitar layout shift (CLS)
// enquanto a imagem carrega.
//
// Se adicionar uma imagem nova, gere a entrada dela com (requer ImageMagick):
//   identify -format "%w %h" client/public/images/nome-do-arquivo.jpg
// e adicione a linha correspondente abaixo.

export const imageDimensions: Record<string, { width: number; height: number }> = {
  "Caraguatatuba_76ea0b63.jpg": { width: 960, height: 698 },
  "Itapecerica_da_Serra_0e4544aa.jpg": { width: 960, height: 720 },
  "Monte_Alegre_do_Sul_ea8c56fb.jpg": { width: 960, height: 662 },
  "Sao_Luis_do_Paraitinga_81de3041.JPG": { width: 960, height: 720 },
  "Serra_do_Japi_65b2c8c1.JPG": { width: 960, height: 720 },
  "aguas_de_lindoia_2_cd622d3d.jpg": { width: 960, height: 678 },
  "aguas_de_sao_pedro_722031e1.jpg": { width: 800, height: 533 },
  "amparo_ec05c34e.jpg": { width: 800, height: 531 },
  "atibaia_650301cd.jpg": { width: 960, height: 640 },
  "bananal_b470531b.jpg": { width: 960, height: 720 },
  "bertioga_17fbf37d.jpg": { width: 960, height: 618 },
  "boituva_30e981ae.jpg": { width: 960, height: 640 },
  "botucatu_d4b332ce.jpg": { width: 882, height: 589 },
  "brotas_8f2c1d5e.jpg": { width: 1280, height: 853 },
  "campos_do_jordao_4e9a51f3.jpg": { width: 960, height: 719 },
  "cananeia_20c059b5.jpg": { width: 960, height: 564 },
  "cunha_651f00c9.jpg": { width: 960, height: 636 },
  "eldorado_e16e770d.jpg": { width: 960, height: 640 },
  "francisco_xavier_c503488f.jpg": { width: 800, height: 450 },
  "guaruja_7063d7f1.jpg": { width: 960, height: 719 },
  "holambra_9dd00644.jpg": { width: 960, height: 638 },
  "ibiuna_847ba7af.jpg": { width: 800, height: 600 },
  "ilhabela_38f1b775.jpg": { width: 960, height: 720 },
  "iporanga_b8a9b4c9.jpg": { width: 960, height: 641 },
  "itu_6f9c5dc7.jpg": { width: 960, height: 720 },
  "joanopolis_61186dab.jpg": { width: 800, height: 530 },
  "jundiai_afbe40fa.jpg": { width: 800, height: 600 },
  "juquitiba_28aed96b.jpg": { width: 960, height: 540 },
  "louveira_daf84d01.jpg": { width: 1280, height: 853 },
  "mogi_das_cruzes_2cf7fe70.jpg": { width: 960, height: 640 },
  "nazare_paulista_d12ffa49.jpg": { width: 960, height: 539 },
  "olimpia_7edcc1fd.jpg": { width: 960, height: 720 },
  "parque_estadudal_da_cantareira_dd452ea4.jpg": { width: 960, height: 640 },
  "pedra_bela_f9c341a0.jpg": { width: 960, height: 387 },
  "pedreira_d58345fb.jpg": { width: 960, height: 537 },
  "piracicaba_5571b1a7.jpg": { width: 960, height: 625 },
  "porto_ferreira_0d407272.jpg": { width: 800, height: 566 },
  "ribeirao_preto_ef476dcf.jpg": { width: 960, height: 540 },
  "salto_c872e6ad.jpg": { width: 960, height: 720 },
  "santana_de_parnaiba_35051b97.jpg": { width: 960, height: 640 },
  "santo_Antonio_do_Pinhal_ca4242c8.JPG": { width: 960, height: 720 },
  "santos_6e066933.jpg": { width: 960, height: 659 },
  "sao_jose_dos_campos_b5a3c56d.jpg": { width: 960, height: 720 },
  "sao_roque_5954510d.jpg": { width: 960, height: 1280 },
  "sao_sebastiao_1ce82cf4.jpg": { width: 960, height: 669 },
  "serra_negra_11469961.jpg": { width: 960, height: 720 },
  "socorro_580ef3b9.jpg": { width: 960, height: 720 },
  "ubatuba_92b7c9dc.jpg": { width: 800, height: 600 },
  "vinhedo_dae8595e.jpg": { width: 960, height: 640 },
};

const FALLBACK = { width: 1200, height: 800 };

/**
 * Retorna width/height para uma imagem a partir da sua URL (ex: "/images/foo.jpg"
 * ou uma URL externa do Unsplash). Usa um fallback 3:2 quando a imagem não está
 * no mapa (ex: imagens externas do Unsplash usadas na home e em 1 destino).
 */
export function getImageDimensions(imageUrl: string): { width: number; height: number } {
  const filename = imageUrl.split("/").pop() ?? "";
  return imageDimensions[filename] ?? FALLBACK;
}
