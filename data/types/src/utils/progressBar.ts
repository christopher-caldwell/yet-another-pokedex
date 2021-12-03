import cliProgress, { Options } from 'cli-progress'
import numeral from 'numeral'

const barOptions: Options = {
  format: 'progress [{bar}] {percentage}% | ETA: {eta_formatted} | {value} / {total}',
  formatTime: time => numeral(time).format('00:00:00'),
}
export const PokemonProgressBar = new cliProgress.SingleBar(barOptions, cliProgress.Presets.shades_classic)
