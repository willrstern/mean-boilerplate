lock '3.1.0'

set :application, "my-application"
set :repo_url,    "git@github.com:youruser/#{fetch(:application)}.git"
set :deploy_to,   "~/#{fetch(:application)}"
set :pty,         true
set :ssh_options, {
  keys:           %w(provisioning/files/ssh/id_rsa),
  forward_agent:  true,
  auth_methods:   %w(publickey, password)
}

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:web), in: :sequence do
      execute "forever stopall || true"
      execute "cd #{release_path}; NODE_ENV=#{fetch(:stage)} forever start server/cluster.js"
    end
  end

  after :updating,    :npm
  after :publishing,  :restart
end
