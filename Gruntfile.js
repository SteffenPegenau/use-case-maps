var recompile =
  'pdflatex -interaction=nonstopmode --main.tex; bibtex main.aux ; pdflatex -interaction=nonstopmode main.tex';

module.exports = function(grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    filepath: null,
    target: null,
    action: null,
    exec: {
      latex: {
        cmd: 'bash compileSrc.sh',
      },
      pdf: {
        cmd: 'bash compilePDF.sh',
      },
    },
    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['exec:latex']
      },
      pdf: {
        files: 'pdf/*.pdf',
        tasks: ['exec:pdf']
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.config('filepath', filepath);
    grunt.config('action', action);
    grunt.config('target', target);
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  // Default task
  grunt.registerTask('default', ['watch']);
};
