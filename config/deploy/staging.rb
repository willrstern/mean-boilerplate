server 'staging.server.com', user: 'deploy', roles: %w{web}

set :branch, ENV['branch'] || proc { `git rev-parse --abbrev-ref HEAD`.chomp } || 'master'
