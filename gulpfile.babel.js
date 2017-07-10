import gulp from 'gulp';
import {usePlumbedGulpSrc} from 'plumb-gulp';
import autoreload from 'autoreload-gulp';
import {argv} from 'yargs';

import './gulp/build';
import './gulp/clean';
import './gulp/distclean';
import './gulp/dist';
import './gulp/doc';
import './gulp/prepublish';
import './gulp/test';
import './gulp/tdd';
import './gulp/watch';
import './gulp/parse';
import './gulp/lint';

usePlumbedGulpSrc();

if (argv.debug) {
  process.env.DEBUG = true;
}

gulp.task('default', autoreload('tdd'));
